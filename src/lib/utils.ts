import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getQueryParams(): URLSearchParams {
  if (typeof window === 'undefined') {
    return new URLSearchParams();
  }
  return new URLSearchParams(window.location.search);
}

export function getRoomFromQuery(): string {
  const params = getQueryParams();
  return params.get('room') || '';
}

export function getOnSaleFromQuery(): boolean {
  const params = getQueryParams();
  return params.get('onSale') === 'true';
}

export function updateURLWithRoom(room: string): void {
  if (typeof window === 'undefined') return;
  
  const url = new URL(window.location.href);
  const params = url.searchParams;
  
  params.delete('room');
  
  if (room && room !== '') {
    params.set('room', room);
  }
  
  window.history.replaceState({}, '', url.toString());
}

export function updateURLWithOnSale(onSale: boolean): void {
  if (typeof window === 'undefined') return;
  
  const url = new URL(window.location.href);
  const params = url.searchParams;
  
  params.delete('onSale');
  
  if (onSale) {
    params.set('onSale', 'true');
  }
  
  window.history.replaceState({}, '', url.toString());
}
