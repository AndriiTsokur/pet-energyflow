import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface QuoteState {
	lastVisited: string | null;
	author: string;
	quote: string;
}

interface QuoteStore {
	quoteOfTheDay: QuoteState;
	updateData: (newData: QuoteState) => void;
}

export const useQuoteStore = create<QuoteStore>()(
	persist(
		(set) => ({
			quoteOfTheDay: {
				lastVisited: null,
				author: '',
				quote: '',
			},
			updateData: (newData: QuoteState) => set({ quoteOfTheDay: newData }),
		}),
		{
			name: 'quote-storage',
			storage: createJSONStorage(() => localStorage),
		}
	)
);

// interface QuoteState {
// 	date: string;

// 	updateIsMobile: (value: boolean) => void;

// 	isMobileMenuVisible: boolean;
// 	updateIsMobileMenuVisible: (value: boolean) => void;
// }

// export const useBear = create<MobileState>()((set) => ({
// 	isMobile: false,
// 	updateIsMobile: (value) => set({ isMobile: value }),

// 	isMobileMenuVisible: false,
// 	updateIsMobileMenuVisible: (value) => set({ isMobileMenuVisible: value }),
// }));
