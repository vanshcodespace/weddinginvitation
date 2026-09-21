/**
 * Data Client for RSVP and Guestbook.
 * 
 * To switch to Firebase/Supabase:
 * 1. Install the respective SDK (e.g., `npm install firebase`)
 * 2. Initialize the app/client here using environment variables
 * 3. Replace the `fetch` calls below with the respective database insertion logic.
 * Example for Firebase Firestore:
 * import { collection, addDoc } from "firebase/firestore";
 * import { db } from "./firebase-config";
 * 
 * export async function submitRSVP(data: any) {
 *   return await addDoc(collection(db, "rsvps"), data);
 * }
 */

export async function submitRSVP(data: any) {
  const response = await fetch('/api/rsvp', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Failed to submit RSVP');
  return await response.json();
}

export async function submitWish(data: any) {
  const response = await fetch('/api/wishes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Failed to submit wish');
  return await response.json();
}
