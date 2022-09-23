import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ConferencesState = {
  votes: {
    'Agree': string[],
    'Restrain': string[],
    'Disagree': string[],
  }
};

const initialState: ConferencesState = {
  votes: {
    'Agree': [],
    'Restrain': [],
    'Disagree': [],
  },
};

export const conferencesSlice = createSlice({
  name: 'conferences',
  initialState,
  reducers: {
    addVote: (state, action: PayloadAction<{ vote: 'Agree' | 'Restrain' | 'Disagree'; name: string }>) => {
      const { vote, name } = action.payload;
      state.votes[vote].push(name);
    },
  }
})

export const { addVote } = conferencesSlice.actions

export default conferencesSlice.reducer
