
"use client"
import { create } from "zustand";



const initialState = {
  isLoading: true,
  language: "en"
}

export const useAppData = create((set, get) => ({
  ...initialState,
  changeLanguage: (payload) => set({ language: payload })
}))