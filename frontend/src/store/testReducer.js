const TEST = 'test/TEST';

export const testAction = () => ({
  type: TEST,
  payload: 'Test successful'
});

const initialState = { message: null };

export default function testReducer(state = initialState, action) {
  switch (action.type) {
    case TEST:
      return { ...state, message: action.payload };
    default:
      return state;
  }
}
