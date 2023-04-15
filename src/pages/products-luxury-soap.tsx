import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Products() {
    return(
        <div id='about-container'>
            <div className='about-persona'>
                <div className='product-image'>
                    <img src='/images/luxury-soap.jpg' />
                </div>
                <div className='about-text'>
                    <h1>Luxury Soap:</h1>
                    <p>
                        Vivamus nisl elit, mollis ut magna sit amet, luctus pulvinar velit. Nam egestas velit diam, efficitur lobortis magna pretium a. Mauris eu posuere nisi, in condimentum tortor. In consectetur blandit lacus ut pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    </p>
                </div>
            </div>
        </div>
    )
}