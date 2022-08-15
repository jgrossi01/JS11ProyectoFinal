class Reservation {
    constructor (id, carname, img, quantity, startDate, endDate, rentedDays, dayPrice, total){
        this.id = parseInt(id);
        this.carname = carname;
        this.img = img;
        this.quantity = parseInt(quantity);
        this.startDate = startDate.toLocaleDateString("es-ES");
        this.endDate = endDate.toLocaleDateString("es-ES");;
        this.renteddays = parseInt(rentedDays);
        this.dayprice = Number(dayPrice);
        this.total = Number(total); 
    }
}

// Clase 12. Operador logico OR si existe x || tal cosa
const arrayReservations = JSON.parse(localStorage.getItem('cart')) || [];

export{ Reservation,arrayReservations };