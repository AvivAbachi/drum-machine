import React from 'react';
import {Layout} from 'antd';
import DrumMachine from './components/DrumMachine';
// import 'antd/dist/antd.css';
// import 'antd/dist/antd.less';

import './styles.less';
const {Header, Footer, Content} = Layout;

const App: React.FC = () => {
  return (
    <Layout>
      <Header>
        <h1>Drum Machine</h1>
      </Header>
      <Content>
        <DrumMachine />
      </Content>
      <Footer>
        <a href='https://github.com/AvivAbachi' target='blink'>
          Create by Avivabachi@gmail.com
        </a>
      </Footer>
    </Layout>
  );
};

export default App;
