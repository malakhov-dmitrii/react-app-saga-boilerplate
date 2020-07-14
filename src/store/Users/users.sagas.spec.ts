import { expectSaga, testSaga } from "redux-saga-test-plan";
import { fetchUser } from "./users.sagas";
// import { call } from "redux-saga/effects";
import { getUser } from "../../shared/services/API/user";
import { call } from "redux-saga-test-plan/matchers";
import { rootReducer } from "..";
import { initialState } from "./users.reducer";
import { UsersActions } from "./users.actions";
import { delay } from "redux-saga/effects";

it("should increment click counter (state test with test-plan async-way)", async () => {
  testSaga(fetchUser, { id: "1" })
    .next()

    .call(getUser, undefined)

    .next({ type: UsersActions.GetUserError, payload: {} });
});
