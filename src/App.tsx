import { memo, FC } from 'react';
import { Layout } from 'antd';
import DrumMachine from './components/DrumMachine';
import './styles.less';

const { Header, Footer, Content } = Layout;

const App: FC = () => {
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

export default memo(App);
