export class UserDashboardComponent {
  events = [
    {
      name: 'Event 1',
      description: 'Description for Event 1',
      price: 50,
      ticketsAvailable: 100,
      image: 'path-to-image-1'
    },
    // Add more events here
  ];

  selectedEvent: any = null;
  numTickets: number = 1;
  successMessage: string | null = null;

  buyTickets(event: any) {
    this.selectedEvent = event;
  }

  confirmPurchase() {
    // Handle the purchase logic here
    this.successMessage = `Successfully bought ${this.numTickets} ticket(s) for ${this.selectedEvent.name}`;
    this.selectedEvent.ticketsAvailable -= this.numTickets;
    this.closeModal();

    // Clear the success message after 3 seconds
    setTimeout(() => {
      this.successMessage = null;
    }, 3000);
  }

  closeModal() {
    this.selectedEvent = null;
    this.numTickets = 1;
  }
}
