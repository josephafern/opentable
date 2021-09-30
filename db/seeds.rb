# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
Restaurant.destroy_all

User.create!(username: 'demo_user', password: '123456')
User.create!(username: 'Fred Flinstone', password: '123456')
User.create!(username: 'Gordon Ramsey', password: '123456')

rest1 = Restaurant.create!(name: 'A Mano', owner_id: 1, description: 'a', cuisine: 'Italian', price: '$$$')
rest2 = Restaurant.create!(name: 'Benihana', owner_id: 2, description: 'a', cuisine: 'Japanese-American', price: '$$$')
rest3 = Restaurant.create!(name: 'Brera Osteria', owner_id: 3, description: 'a', cuisine: 'Italian', price: '$$$')
rest4 = Restaurant.create!(name: 'Carbone', owner_id: 1, description: 'a', cuisine: 'Italian', price: '$$$')
rest5 = Restaurant.create!(name: 'Chica', owner_id: 2, description: 'a', cuisine: 'Mexican', price: '$$$')
rest6 = Restaurant.create!(name: 'Cipriani', owner_id: 3, description: 'a', cuisine: 'Italian', price: '$$$')
rest7 = Restaurant.create!(name: 'Coyo', owner_id: 1, description: 'a', cuisine: 'Mexican', price: '$$$')
rest8 = Restaurant.create!(name: 'Delilah', owner_id: 2, description: 'a', cuisine: 'American', price: '$$$')
rest9 = Restaurant.create!(name: 'Dumpling Time', owner_id: 3, description: 'a', cuisine: 'Cal-Asian', price: '$$$')
rest10 = Restaurant.create!(name: 'Hell\'s Kitchen', owner_id: 1, description: 'a', cuisine: 'American', price: '$$$')
rest11 = Restaurant.create!(name: 'Mamahuhu', owner_id: 2, description: 'a', cuisine: 'Chinese-American', price: '$$$')
rest12 = Restaurant.create!(name: 'Mojitos', owner_id: 3, description: 'a', cuisine: 'Cuban', price: '$$$')
rest13 = Restaurant.create!(name: 'Mon Ami Gabi', owner_id: 1, description: 'a', cuisine: 'French', price: '$$$')
rest14 = Restaurant.create!(name: 'Morimoto', owner_id: 2, description: 'a', cuisine: 'Japanese', price: '$$$')
rest15 = Restaurant.create!(name: 'Moya', owner_id: 3, description: 'a', cuisine: 'Ethiopian', price: '$$$')
rest16 = Restaurant.create!(name: 'North India', owner_id: 1, description: 'a', cuisine: 'Indian', price: '$$$')
rest17 = Restaurant.create!(name: 'Rice', owner_id: 2, description: 'a', cuisine: 'Mediterranean', price: '$$$')
rest18 = Restaurant.create!(name: 'Sergio\'s', owner_id: 3, description: 'a', cuisine: 'Cuban', price: '$$$')
rest19 = Restaurant.create!(name: 'Spago', owner_id: 1, description: 'a', cuisine: 'Italian', price: '$$$')
rest20 = Restaurant.create!(name: 'Volcano Curry', owner_id: 1, description: 'a', cuisine: 'Japanese', price: '$$$')


rest1.photo.attach(io: open('https://open-table-seeds.s3.us-west-1.amazonaws.com/OT-imgs/a-mano-sf/AMano_PChang_4330.0.jpg'), filename: 'a-mano.jpg')
rest2.photo.attach(io: open('https://open-table-seeds.s3.us-west-1.amazonaws.com/OT-imgs/benihana-mia/Benihana_1%2BT.jpg'), filename: 'benihana.jpg')
rest3.photo.attach(io: open('https://open-table-seeds.s3.us-west-1.amazonaws.com/OT-imgs/brera-lv/interior-3_1920x1080.jpg.resize.0.0.1200.630.jpg'), filename: 'brera.jpg')
rest4.photo.attach(io: open('https://open-table-seeds.s3.us-west-1.amazonaws.com/OT-imgs/carbone-lv/Carbone_Red_Room_Aria.0.0.1446003814.jpg'), filename: 'carbone.jpg')
rest5.photo.attach(io: open('https://open-table-seeds.s3.us-west-1.amazonaws.com/OT-imgs/chica-lv/interior-1_1920x1080.jpg'), filename: 'chica.jpg')
rest6.photo.attach(io: open('https://open-table-seeds.s3.us-west-1.amazonaws.com/OT-imgs/cipriani-lv/Cipriani_1__FIRST_PHOTO_.0.jpg'), filename: 'cipriani.jpg')
rest7.photo.attach(io: open('https://open-table-seeds.s3.us-west-1.amazonaws.com/OT-imgs/coyo-mia/1584051569.74.webp'), filename: 'coyo.webp')
rest8.photo.attach(io: open('https://open-table-seeds.s3.us-west-1.amazonaws.com/OT-imgs/delilah-lv/1_Wynn_Delilah_Ceiling%2520Sweep_Robert%2520Miller6-1920x602.jpg'), filename: 'delilah.jpg')
rest9.photo.attach(io: open('https://open-table-seeds.s3.us-west-1.amazonaws.com/OT-imgs/dumpling-time-sf/DumplingTime_PChang-2988.jpg'), filename: 'dumpling-time.jpg')
rest10.photo.attach(io: open('https://open-table-seeds.s3.us-west-1.amazonaws.com/OT-imgs/hells-kitchen-lv/Hell_s_Kitchen___MAIN_PHOTO.jpg'), filename: 'hells-kitchen.jpg')
rest11.photo.attach(io: open('https://open-table-seeds.s3.us-west-1.amazonaws.com/OT-imgs/mamahuhu-sf/Mamahuhu_PChang_2022.jpg'), filename: 'mamahuhu.jpg')
rest12.photo.attach(io: open('https://open-table-seeds.s3.us-west-1.amazonaws.com/OT-imgs/mojitos-mia/Screen+Shot+2021-09-29+at+11.31.51+AM.png'), filename: 'mojitos.jpg')
rest13.photo.attach(io: open('https://open-table-seeds.s3.us-west-1.amazonaws.com/OT-imgs/mon-ami-gabi-lv/Vegas_Le_Cabaret_Private_Parties.jpg'), filename: 'mon-ami-gabi.jpg')
rest14.photo.attach(io: open('https://open-table-seeds.s3.us-west-1.amazonaws.com/OT-imgs/morimoto-lv/MORIMOTO_SushiBar1-1.jpg'), filename: 'morimoto.jpg')
rest15.photo.attach(io: open('https://open-table-seeds.s3.us-west-1.amazonaws.com/OT-imgs/moya-sf/hcmp99824_355853.jpeg'), filename: 'moya.jpeg')
rest16.photo.attach(io: open('https://open-table-seeds.s3.us-west-1.amazonaws.com/OT-imgs/north-india-sf/unnamed-4.jpg'), filename: 'north-india.jpg')
rest17.photo.attach(io: open('https://open-table-seeds.s3.us-west-1.amazonaws.com/OT-imgs/rice-mia/4cf6a5fe6356089034f44d1e095b02db_-united-states-florida-miami-dade-county-miami-rice-mediterranean-kitchen-305-705-6090htm.png'), filename: 'rice.png')
rest18.photo.attach(io: open('https://open-table-seeds.s3.us-west-1.amazonaws.com/OT-imgs/sergios-mia/MIA_105Sergios00NEWPPP.jpg'), filename: 'sergios.jpg')
rest19.photo.attach(io: open('https://open-table-seeds.s3.us-west-1.amazonaws.com/OT-imgs/spago-lv/1566510877.84.webp'), filename: 'spago.webp')
rest20.photo.attach(io: open('https://open-table-seeds.s3.us-west-1.amazonaws.com/OT-imgs/volcano-curry-sf/seating-area-in-the-restaurant.jpg'), filename: 'volcano-curry.jpg')
