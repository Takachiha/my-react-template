import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory('Counter');

const counterActions = {
  increment: actionCreator<number>('INCREMENT_COUNT')
};

export default counterActions;
