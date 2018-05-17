import { changeNode, changeNodeIntent } from '../../actions';
import selectedNode, { SelectedNodeState } from './reducers';

export const selectedNodeExpectedState = {
  initialState: { nodeId: 'eth_mycrypto', prevNode: 'eth_mycrypto', pending: false },
  nodeChange: { nodeId: 'nodeToChangeTo', prevNode: 'eth_auto', pending: false },
  nodeChangeIntent: { nodeId: 'eth_mycrypto', prevNode: 'eth_mycrypto', pending: true }
};

describe('selected node reducer', () => {
  const actions = {
    changeNode: changeNode({ nodeId: 'nodeToChangeTo', networkId: 'networkToChangeTo' }),
    changeNodeIntent: changeNodeIntent('eth_mycrypto')
  };

  it('should handle a node change', () =>
    expect(selectedNode(undefined, actions.changeNode)).toEqual(
      selectedNodeExpectedState.nodeChange
    ));

  it('should handle the intent to change a node', () =>
    expect(
      selectedNode(
        selectedNodeExpectedState.initialState as SelectedNodeState,
        actions.changeNodeIntent
      )
    ).toEqual(selectedNodeExpectedState.nodeChangeIntent));
});
