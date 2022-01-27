import React from 'react';

import { Tabs } from './components/Tabs/Tabs';

const tabsFromServer: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type Props = {};

type State = {
  tabs: Tab[],
  selectedTab: Tab,
};

class App extends React.Component<Props, State> {
  state: State = {
    tabs: tabsFromServer,
    selectedTab: tabsFromServer[0],
  };

  handleTabSelected = (selectedTab: Tab) => {
    this.setState({
      selectedTab,
    });
  };

  render() {
    const { tabs, selectedTab } = this.state;

    return (
      <div className="App">
        <h1 className="title">{`Selected tab is ${selectedTab.title}`}</h1>
        <Tabs
          tabs={tabs}
          selectedTabId={selectedTab.id}
          onTabSelected={this.handleTabSelected}
        />
      </div>
    );
  }
}

export default App;
