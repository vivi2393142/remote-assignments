// Component: 導覽列相關components - MenuButton, Nav, Menu, CloseButton
const MenuButton = props => (
  <ul className="menubutton" onClick={props.toggleNavUnfold}>
    <li className="line"></li>
    <li className="line"></li>
    <li className="line"></li>
  </ul>
)

const Nav = props => {
  if (props.navUnfold) {
    return (
      <ul className={props.classname}>
        <li><a href="#">Item 1</a></li>
        <li><a href="#">Item 2</a></li>
        <li><a href="#">Item 3</a></li>
        <li><a href="#">Item 4</a></li>
      </ul>
    )
  }
  return null
}

const Menu = props => (
  <div className="menu">
    <MenuButton toggleNavUnfold={props.toggleNavUnfold}/>
    <Nav classname="smallNav" navUnfold={props.smallNavUnfold}/>
    <Nav classname="bigNav" navUnfold={true}/>
  </div>
)

const CloseButton = props => (
  <div className="closeButton" onClick={props.toggleCloseNav}>
    X
  </div>
)

// Component: Header包含Menu, Nav
const Header = props => (
  <header className="main-header">
    <h1 className="webtitle">Website Title</h1>
    <img className="logo" src="img/logo.png" alt="logo" />
      <Menu 
        toggleNavUnfold={props.toggleNavUnfold}
        smallNavUnfold={props.smallNavUnfold}
      />
      {props.smallNavUnfold ? <CloseButton toggleCloseNav={props.toggleCloseNav} /> : null}
  </header>
)

// Component: Banner包含welcomeText
const Banner = props => (
  <div className="banner">
      <h1 className="welcome" onClick={props.changeWelcomeText}>
        {props.welcomeText}
      </h1>
  </div>
)

// Component: 製造編號 ? ~ ? 的content box，若notCallAction為false或沒有，則插入list
const ContentList = props => {
  let result = [];
  if (!props.notCallAction){
    for ( let i=props.start ; i<=props.end ; i++ ) {
      result.push(<div className="contentbox">Content Box {i}</div>)
    };
  }
  return result;
};

// Component: 未呼喚的contents box
const Contents = () => (
  <div className="contents">
    <ContentList 
      start={1} 
      end={4}
    />
  </div>
)

// Component: 呼叫用按鈕
const CallButton = props => (
  <div className="button" onClick={props.toggleNotCallAction}>
    <a href="#">Call to Action</a>
  </div>
)

// Component: 呼喚後產生的contents box
const CallContents = props => (
  <div className="contents callContents">
    <ContentList 
      start={5} 
      end={8} 
      // 若未呼叫(notCallAction為真)，則不增插入list
      notCallAction={props.notCallAction}
    />
  </div>
)

// Component: Wrapper包含Contents, CallButton和CallContents
const Wrap = props => (
  <section className="wrap">
      <h1 className="sectiontitle">Section Title</h1>
      <Contents />
      <CallButton toggleNotCallAction={props.toggleNotCallAction}/>
      <CallContents notCallAction={props.notCallAction}/>
      <div className="backTo"><a href="../index.html"> &lt; Back to other assignments </a></div>
  </section>
)

class App extends React.Component {
  state = {
    notCallAction: true,
    smallNavUnfold: false,
    welcomeText: 'Welcome Message'
  }

  // Function: 更改callAction狀態
  toggleNotCallAction = () => (
    this.setState({
      notCallAction: false
    })
  )

  // Function: 點選折疊選單，更改smallNavUnfold狀態
  toggleNavUnfold = () => {
    this.setState({
      smallNavUnfold: true
    });
  }

  // Function: 點選叉叉，更改smallNavUnfold狀態
  toggleCloseNav = () => {
    this.setState({
      smallNavUnfold: false
    });
  }

  // Function: 更改welcomeText
  changeWelcomeText = () => {
    this.setState({
      welcomeText: 'Have a Good Time!'
    })
  }

  render() {
    return(
      <div className="App">
        <Header 
          toggleNavUnfold={this.toggleNavUnfold}
          toggleCloseNav={this.toggleCloseNav}
          smallNavUnfold={this.state.smallNavUnfold}
        />
        <Banner 
          welcomeText={this.state.welcomeText}
          changeWelcomeText={this.changeWelcomeText}
        />
        <Wrap 
          notCallAction={this.state.notCallAction}
          toggleNotCallAction={this.toggleNotCallAction}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);