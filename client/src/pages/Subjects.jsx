import React from 'react'

export default function Subjects() {
  const subs = [
    {
      subject: "DCIT 21",
      details: "If a dog chews shoes whose shoes does he choose?",
      route: "dcit21",
      img: "https://scontent.xx.fbcdn.net/v/t1.15752-9/306051869_3446467462306489_6645728447651262618_n.jpg?stp=dst-jpg_p100x100&_nc_cat=101&ccb=1-7&_nc_sid=4de414&_nc_eui2=AeH2boKhmXowUjcYDRU4v-KTg0NNcghPst2DQ01yCE-y3bbOAN1rH2Dlw1-zKi28zqM_v_J2FSdwd5S783PYsheF&_nc_ohc=q4LhIJz7NDcAX_f0X0S&_nc_oc=AQknElMHVyv25LprtMpkOODeWws-guIhj15njs5ihE4_n5delUJC770ztffQV65jU8RBydvYvx0MIqQgtVjxnabN&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSai0RZVjb0lH67mH9kj4V4INDjAmF659QZFufkjc9kuw&oe=639AB159"
    },
    {
      subject: "DCIT 22",
      details: "If a dog chews shoes whose shoes does he choose?",
      route: "dcit22",
      img: "https://scontent.xx.fbcdn.net/v/t1.15752-9/306445545_1346493142548469_2256746134875168952_n.jpg?stp=dst-jpg_p100x100&_nc_cat=105&ccb=1-7&_nc_sid=4de414&_nc_eui2=AeGZuXyUTZ1JNGJEofGgaKwLlpWWQUd3EISWlZZBR3cQhPGzw--Rao32dkTgdWhYhyW2WwQ16lYlaXlja9HZzyI9&_nc_ohc=1TjBt2E8nvUAX_a2pUl&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRYwEMEsOSyk9u-W0BO92sn-npSJ2PivJErNajOlBqGZQ&oe=639AD0C1"
    },
    {
      subject: "GNED 02",
      details: "If a dog chews shoes whose shoes does he choose?",
      route: "gned02",
      img: "https://scontent.xx.fbcdn.net/v/t1.15752-9/305945049_1097309137558208_3307274426019422424_n.jpg?stp=dst-jpg_p100x100&_nc_cat=105&ccb=1-7&_nc_sid=4de414&_nc_eui2=AeFKcpAG2qaRhsZRWdY-R25DsvysL9u7iG2y_Kwv27uIbYnxYraT_5y2PYxt1yPXQeGhbVjn5_lKu9CluyTKolJl&_nc_ohc=JEyGEBVtkW4AX-VD6Gd&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRNM_yjouUO73HWnXFW4fZH9ltLwnDAF7eCjcDgYuuGgQ&oe=639AAEDC"
    },
    {
      subject: "GNED 05",
      details: "If a dog chews shoes whose shoes does he choose?",
      route: "gned05",
      img: "https://scontent.xx.fbcdn.net/v/t1.15752-9/306158317_1261066371322255_4233575883055681348_n.jpg?stp=dst-jpg_p100x100&_nc_cat=108&ccb=1-7&_nc_sid=4de414&_nc_eui2=AeE7R2-U8whUKW3bUM63JLEeq1rDGE1BxQmrWsMYTUHFCTlo-562B_3Ig1kkePsjsC-2yWV2nO9I4XDasLnLDe3l&_nc_ohc=QPLbW0yLxdoAX8HOG1Z&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRaGhlX4hFD2U59pmICdetV2GO0iFY3UF8yKJrrEBLtsw&oe=639AC513"
    },
    {
      subject: "GNED 11",
      details: "If a dog chews shoes whose shoes does he choose?",
      route: "gned11",
      img: "https://scontent.xx.fbcdn.net/v/t1.15752-9/306765078_505421584731126_25293280539963850_n.jpg?stp=dst-jpg_p100x100&_nc_cat=104&ccb=1-7&_nc_sid=4de414&_nc_eui2=AeEk3MrHYMI5SrppUCWJqkp8EWBOPdJtVJYRYE490m1UliJsAOkDCBQ-CZ3ANF9DJ_WsyLdvZA5bOiGw8tr42M_J&_nc_ohc=Vd3iXjDOv1YAX_9-afQ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQ0Bfq_ZPegO7iEZEEJGpP4Cbm7IjysIvlT8_70BitU7g&oe=639AC911"
    },
    {
      subject: "COSC 50",
      details: "If a dog chews shoes whose shoes does he choose?",
      route: "cosc50",
      img: "https://scontent.xx.fbcdn.net/v/t1.15752-9/306379068_1123186688610617_517687244362262405_n.jpg?stp=dst-jpg_p100x100&_nc_cat=110&ccb=1-7&_nc_sid=4de414&_nc_eui2=AeEZlldW7GOj4qAmP4-hvvnli0R0V0bd4QiLRHRXRt3hCB4MDBpgN-YU6KSoy8SwLC_9uGqJaJHrFzAt4BCcAr8F&_nc_ohc=M6U6JhaQpokAX8esHjP&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRBBmdTbTPP5i_tsFZfAlIky0xfXIJM4o2dUGUKAn90Aw&oe=639AADFD"
    },
    {
      subject: "FITT 1",
      details: "If a dog chews shoes whose shoes does he choose?",
      route: "fitt1",
      img: "https://scontent.xx.fbcdn.net/v/t1.15752-9/306243239_777243536659736_7618063381101371684_n.jpg?stp=dst-jpg_p100x100&_nc_cat=107&ccb=1-7&_nc_sid=4de414&_nc_eui2=AeEuu03SJcAljVnmk_XrNviwUdSSGUEPgQhR1JIZQQ-BCP9sgaLYxTh8egbGwhzrJ8CxKGJeOHqYfowBpGrwLc59&_nc_ohc=lHXWtFWbHaoAX_Wlr49&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQh5AZce20oBxad0o_epzJnYQqFrf5-eMFHyXYfVC-XPg&oe=639AD04D"
    },
  ]
  
  console.log(subs)
  return (
    <div className='flex justify-center items-center w-full h-[65em] md:h-full lg:h-full bg-base-300'>
      <div className='pt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 gap-y-5 lg:gap-20 lg:gap-y-10'>
        {subs.map(data => {
          return (
            <div className="card w-40 h-42 lg:h-68 lg:w-52 bg-base-100 shadow-xl">
              <a href={`/subjects/${data.route}/identification`}>
                <figure className="rounded-t-[var(--rounded-box)]"><img src={data.img} alt="" className='object-cover w-full h-28 bg-center' /></figure>
                <div className="card-body">
                  <h2 className="card-title">{data.subject}</h2>
                  <p className='hidden lg:block'>{data.details}</p>
                </div>
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}
