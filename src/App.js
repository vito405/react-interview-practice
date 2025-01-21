
import './App.css';
import Accordian from './components/accordian';
import Slider from './components/imageslider';
import LightDarkMode from './components/light-dark';
import LoadMore from './components/loadmore';
import QRcode from './components/qrCode';
import RandomColor from './components/randomColor';
import Scroll from './components/scroll';
import StarRating from './components/star';
import Tree from './components/tree';
import menus from './components/tree/data';
import TabTest from './components/tabs/tab-test';
import ModalTest from './components/custom-module/modal-test';
import GitHubFinder from './components/githubfinder';


function App() {
  return (
    <div className='App'>
        {/* <Accordian />
      <RandomColor/>
      <StarRating />
      <Slider url={'https://picsum.photos/v2/list'} page={'1'} limit={'10'} />
       <LoadMore />
      <Tree menus={menus} /> 
      <QRcode />
      <LightDarkMode />
      <Scroll url={'https://dummyjson.com/products?limit=100'}/>
       <TabTest /> 
       <ModalTest /> */}
       <GitHubFinder />
    </div>
  );
}

export default App;
