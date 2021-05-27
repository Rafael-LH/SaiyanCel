import React from 'react'
import useGetImageFirebase from '@hooks/generals/useGetImageFirebase'
import app from '@config/app'
import './styles.scss'

const AboutUs = () => {
  const { url } = useGetImageFirebase(app.imgBackGroundAboutUs)
  return (
    <section className="layoutMaxWidth container-about-us">
      <article>
        <div>
          <p>
            <b>Saiyancel</b> trae para ti los mejores productos <b>apple</b> a un super precio contamos con
        un alto inventario en todos nuestros productos además cada uno de ellos tienen garantía* con nosotros
        y directo de fábrica también contamos con meses sin intereses con tarjetas participantes, no esperes más para
        llevarte alguno de nuestros productos!
      </p>
        </div>
        <figure>
          <img src={url} alt="Image" />
        </figure>
      </article>
    </section>
  )
}
export default AboutUs