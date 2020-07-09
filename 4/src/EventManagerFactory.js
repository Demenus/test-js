import EventManager from './EventManager';
import Event from './Event';

export default class EventManagerFactory{
    static create(events, types) {
        const filteredEvents = events.filter((ev) => types.includes(ev.type)).map((ev) => new Event(ev));
        return new EventManager(filteredEvents);
    }
};