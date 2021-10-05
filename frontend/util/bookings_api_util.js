export const createBooking = (booking) => {
    return $.ajax({
        method: 'POST',
        url: `/api/bookings`,
        data: { booking }
    });
}

export const fetchBookingsByUser = (userId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/users/${userId}/bookings`
    });
}

export const updateBooking = (booking) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/users/${booking.maker_id}/bookings/${booking.id}`,
        data: { booking }
    });
}

export const destroyBooking = (booking) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/users/${booking.maker_id}/bookings/${booking.id}`
    });
}