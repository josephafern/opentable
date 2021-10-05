import * as BookingApiUtil from '../util/bookings_api_util'

export const RECEIVED_BOOKING = 'RECEIVED_BOOKING';
export const RECEIVED_BOOKINGS = 'RECEIVED_BOOKINGS';
export const DESTROYED_BOOKING = 'DESTROYED_BOOKING';

const receivedBooking = (booking) => {
    return {
        type: RECEIVED_BOOKING,
        booking
    }
}

const receivedBookings = (bookings) => {
    return {
        type: RECEIVED_BOOKINGS,
        bookings
    }
}

const destroyedBooking = (booking) => {
    return {
        type: DESTROYED_BOOKING,
        booking
    }
}

export const createBooking = (booking) => (dispatch) => {
    return BookingApiUtil.createBooking(booking).then(booking => dispatch(receivedBooking(booking)))
}

export const fetchBookingsByUser = (userId) => (dispatch) => {
    return BookingApiUtil.fetchBookingsByUser(userId).then(bookings => dispatch(receivedBookings(bookings)));
}

export const updateBooking = (booking) => (dispatch) => {
    return BookingApiUtil.updateBooking(booking).then(booking => dispatch(receivedBooking(booking)));
}

export const destroyBooking = (bookingId) => (dispatch) => {
    return BookingApiUtil.destroyBooking(bookingId).then(booking => dispatch(destroyedBooking(booking)));
}