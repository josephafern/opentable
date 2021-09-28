class User < ApplicationRecord

  validates_presence_of :username, :password_digest, :session_token 
  validates_uniqueness_of :username, :session_token
  validates :password, length: { minimum: 6, maximum: 12 }, allow_nil: true

  before_validation :ensure_session_token
  
  attr_reader :password 

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password 
    self.password_digest = BCrypt::Password.create(password)
  end
  
  def is_password?(password)
    password_obj = BCrypt::Password.new(self.password_digest)
    password_obj.is_password?(password)
  end
  
  def reset_session_token!
    self.session_token ||= SecureRandom.urlsafe_base64
    self.save!
    self.session_token 
  end
  
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end