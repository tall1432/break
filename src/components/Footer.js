import React from "react"
import styles from'../css/footer.module.css'
import {Link} from 'gatsby'
import links from "../const/links"
import socialIcons from "../const/social-icons"
const Footer = () => {
  return (
   <footer className= {styles.footer}>
<div className={styles.links}>  
{links.map((item, index)=>{
  return <Link key= {index} to= {item.path} >{item.text}</Link>
})}

</div>
<div className={styles.icons}>
          {socialIcons.map((item, index) => {
            return (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            )
          })}
        </div>
        <div className={styles.copyright}>
        copyright &copy; backroads travel conpany {new Date().getFullYear()} all rights reserved
        </div>
   </footer>
  
  

  )
}
export default Footer
