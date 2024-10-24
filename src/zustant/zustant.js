import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

let useStore = (set) => {
    return {
        tickets: [],
        paidTickets: [],
        setTicket: (ticket) => set((state) => ({ tickets: [...state.tickets, ticket] })),
        setPaidTicket: (ticket) => set((state) => ({ paidTickets: [...state.paidTickets, ticket] })),
        deleteTicket: (id) => set((state) => ({
            paidTickets: state.paidTickets.filter((item) => item.id !== id),
        }))
    }
}

useStore = devtools(useStore)
useStore = persist(useStore, { name: 'tickets' })

export default create(useStore)