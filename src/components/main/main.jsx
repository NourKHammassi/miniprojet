import React from 'react'
import './main.css'
import { Image } from 'antd';

export default function Main() {
    return(
        <div className="mainprop">
            <div > 
                <h1 className="title">B&B AUTOMATED NEWS</h1>  
                <p  className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut justo ac libero ultrices pulvinar id in odio. Donec vel purus sodales, dapibus urna vel, rhoncus velit. Quisque ultrices imperdiet dolor, at pellentesque orci posuere sed. Proin volutpat non ipsum sed ultrices. Pellentesque dolor nisi, iaculis at leo vel, imperdiet blandit ligula. Suspendisse iaculis odio erat, at gravida eros lobortis sit amet. Suspendisse porttitor congue enim, eu sagittis velit ultricies et. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur ac blandit sem, sit amet suscipit sapien. Vivamus sollicitudin tortor nisi, eu dapibus nulla facilisis sed. Praesent venenatis ultrices ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis sollicitudin nibh, non elementum eros. Duis in varius magna.
                </p>
            </div>
            <div className="image" >
                <Image
                width={300}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
            </div>
     </div>
    )
}
