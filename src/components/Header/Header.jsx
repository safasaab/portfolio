import './HeaderStyle.css'
// import background from './../../assets/img/20.light-purple-floral-backgrounds.jpg'
import heroimg from './../../assets/img/images-modified.png'
const Header = () => {
  return (
    <>
    <div className='hero'>
      <div className='left'>
        <h1 className="title">
        <span>Hi!</span> Iam Safa, Frontend Developer</h1>
        <p className='subtitle' >I develop technologies that empower regular people to explore space on their own terms, I focus on helping your brand grow. </p>
        </div>
        <div className="right">
          <img src={heroimg} alt="" />
        </div>
      </div>
    
      {/* <img className='HeaderBackground' src={background} alt="" /> */}
    </>
  )
}

export default Header
