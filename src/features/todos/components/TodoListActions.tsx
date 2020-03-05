import React from 'react';
import { connect } from 'react-redux';
import { RootState } from 'services';
import { loadTodosAsync, saveTodosAsync } from '../actions';
const mapStateToProps = (state: RootState) => ({
  isLoading: state.todos.isLoadingTodos
});

const dispatchProps = {
  loadTodos: loadTodosAsync.request,
  saveTodos: saveTodosAsync.request
};

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

type State = {};

const TodoActions = ({ isLoading, loadTodos, saveTodos }: Props) => {
  return (
    // <section>
    //     <button type="button" onClick={()=>loadTodos()} disabled={isLoading}>
    //         Load snapshot
    //     </button>
    // </section>>

    <section>
      <button onClick={() => loadTodos()} disabled={isLoading}>
        load todos
      </button>
    </section>
  );
};

export default connect(mapStateToProps, dispatchProps)(TodoActions);
