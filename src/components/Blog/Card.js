import React, { useState } from "react"

const Card = (props) => {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
    if (!modal) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }

  return (
    <>
      <div className='box btn_shadow card-project'>
        <div className='img'>
          <img src={props.image} alt='' onClick={toggleModal} />
        </div>
        <div className='category d_flex'>
          <span onClick={toggleModal}>{props.date}</span>
        </div>
        <div className='title'>
          <h2 onClick={toggleModal}>{props.title_one}</h2>
          <a href='#popup' className='arrow' onClick={toggleModal}>
            <i className='fas fa-arrow-right'></i>
          </a>
        </div>
      </div>

      {/* Popup box */}
      {modal && (
        <div className='modal-overlay' onClick={toggleModal}>
          <div className='modal-content modal-blog-content' onClick={(e) => e.stopPropagation()}>
            <div className='modal-img'>
              <img src={props.image} alt='' />
            </div>
            <div className='modal-text blog-text'>
              <span>{props.date}</span>
              <h1>{props.title_one}</h1>
              <p>{props.desc_one}</p>

              <h1>{props.title_two}</h1>
              <p>{props.desc_two}</p>

              <h1>{props.title_three}</h1>
              <p>{props.desc_three}</p>

              <button className='close-modal btn_shadow' onClick={toggleModal}>
                <i className='fas fa-times'></i>
              </button>

              <div className='contact mtop'>
                <h1>Leave a Reply</h1>
                <form className='blog_contact'>
                  <div className='row'>
                    <input type='text' placeholder='Name' />
                    <input type='email' placeholder='Email' />
                  </div>
                    <input type='text' placeholder='Website' />
                    <textarea cols='30' rows='5' placeholder='Comment'></textarea>
                    <button className='btn_shadow'>SUBMIT NOW</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Card