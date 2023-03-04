class EventBus {
  private readonly listeners: Record<string, Array<(...args: unknown[]) => void>> = {};

  on(event: string, callback: () => void) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off(event: string, callback: () => void) {
    if (!this.listeners[event]) {
      throw new Error(`No such event '${event}'`);
    }

    this.listeners[event] = this.listeners[event].filter(listener => listener !== callback);
  }

  emit(event: string, ...args: unknown[]) {
    if (!this.listeners[event]) {
      throw new Error(`No such event '${event}'`);
    }

    this.listeners[event].forEach(listener => listener(...args));
  }
}

export default EventBus;
