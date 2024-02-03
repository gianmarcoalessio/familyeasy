// userStore.js
import { writable } from 'svelte/store';

// A function to initialize the user store's state from localStorage
function createUserStore() {
    const initialState = {
        user_id: localStorage.getItem('user_id') || '',
        username: localStorage.getItem('username') || '',
        first_name: localStorage.getItem('first_name') || '',
        last_name: localStorage.getItem('last_name') || '',
    };

    const { subscribe, set } = writable(initialState);

    return {
        subscribe,
        setUser: (user) => {
            localStorage.setItem('user_id', user.user_id);
            localStorage.setItem('username', user.username);
            localStorage.setItem('first_name', user.first_name);
            localStorage.setItem('family_name', user.family_name);
            set(user);
        }
    };
}

export const userStore = createUserStore();
