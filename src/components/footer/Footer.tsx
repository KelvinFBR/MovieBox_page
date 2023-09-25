'use client'

import { IFacebook, IInstagram, ITwitter, IYoutube } from "../Icons"

export const Footer = () => {
  return (
    <footer className="flex flex-col gap-y-6 p-8">
      {/* social media */}
      <section>
        <ul className="flex justify-center items-center gap-y-8 gap-x-10 flex-wrap">
          <li>
            <IFacebook />
          </li>
          <li>
            <IInstagram />
          </li>
          <li>
            <ITwitter/>
          </li>
          <li>
            <IYoutube />
          </li>
        </ul>
      </section>

      {/* conditions, Policy & privacy */}
      <section>
        <ul className="flex justify-center gap-y-4 gap-x-10 flex-wrap text-gray_900 font-bold">
          <li>Conditions of Use</li>
          <li>Privacy & Policy</li>
          <li>Press Room</li>
        </ul>
      </section>

      {/* Copy */}
      <section className="flex justify-center">
        <p className="text-center text-gray_500 font-bold">&copy; 2021 MovieBox by Adriana Eka Prayudha</p>
      </section>
    </footer>
  )
}
