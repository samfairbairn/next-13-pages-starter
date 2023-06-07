import {
  Carousel,
  GSAPBlock,
  Marquee,
  Parallax,
  ScrollBlock,
  SlidingTitle,
  SlowBlock,
  Sticky,
} from "@/components"
import { Layout } from "@/layouts/default"
import { Metadata } from "next"

export default function Home() {
  return (
    <Layout>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="w-screen h-screen flex flex-col items-center justify-center">
          <h2 className={` type-title`}>Welcome</h2>

          <Parallax
            speed={-4}
            className="absolute w-16 h-16 top-2/3 right-40 rounded-full bg-black"
            top={true}
          >
            <></>
          </Parallax>
          <Parallax
            speed={-2}
            className="absolute w-36 h-36 top-1/4 right-1/3 rounded-full bg-black"
            top={true}
          >
            <></>
          </Parallax>
          <Parallax
            speed={-3}
            className="absolute w-24 h-24 top-3/4 left-1/4 rounded-full bg-black"
            top={true}
          >
            <></>
          </Parallax>
          <Parallax
            speed={-1}
            className="absolute w-28 h-28 top-1/4 left-24 rounded-full bg-black"
            top={true}
          >
            <></>
          </Parallax>
        </div>

        <div className="flex w-screen mb-8 px-8">
          <div className="flex flex-col w-2/3 pr-8">
            <div className="flex flex-col justify-center items-center w-full h-[90vh] bg-green-light mb-[5vh] rounded-3xl">
              <SlidingTitle>sliding title</SlidingTitle>
              <SlidingTitle>sliding title</SlidingTitle>
              <SlidingTitle>sliding title</SlidingTitle>
            </div>
            <div className="w-full h-[90vh] bg-green-light rounded-3xl">
              <ScrollBlock />
            </div>
          </div>
          <Sticky
            start={0}
            end={0}
            wrapperClass="flex w-1/3"
            className="flex w-full h-[95vh] pt-[5vh] -top-[5vh]"
          >
            <div className="flex flex-col items-center justify-center w-full h-[90vh] bg-blue type-body rounded-3xl">
              sticky block
            </div>
          </Sticky>
        </div>

        <div className="flex flex-col w-screen px-8">
          <SlowBlock className="overflow-hidden rounded-3xl">
            <div className="flex flex-col p-8">
              <h1 className="type-title-s text-white mb-8">some content</h1>
              <div className=" columns-3 gap-8">
                <p className="type-body text-white mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia laoreet
                  laoreet. Aliquam molestie nibh at orci consequat, nec porta tellus ullamcorper.
                  Nunc ac diam id nibh commodo suscipit eget eu mi.
                </p>
                <p className="type-body text-white mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet
                  ullamcorper nisl, in tristique sem. Vestibulum tempus nulla ac pretium
                  consectetur. Praesent condimentum, purus non ultricies imperdiet, sapien nibh
                  convallis neque, ac vulputate metus ligula non felis. Proin convallis convallis
                  lectus vel suscipit.
                </p>
                <p className="type-body text-white mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed augue gravida,
                  condimentum ipsum ut, tristique velit. Maecenas eget neque efficitur, euismod
                  turpis non, ornare ex. Integer id pretium felis.
                </p>
                <p className="type-body text-white mb-4">
                  Nunc sollicitudin tellus sed magna convallis dignissim. Vivamus sagittis lectus ac
                  eros malesuada commodo. Etiam vulputate imperdiet massa, vel convallis leo cursus
                  in. Praesent maximus, tortor et aliquet euismod, tellus metus pharetra dui, sed
                  imperdiet felis ipsum nec lectus. Nulla diam turpis, lobortis vel molestie non,
                  euismod a massa.
                </p>
                <p className="type-body text-white mb-4">
                  Duis vitae urna eu eros pulvinar luctus molestie a nibh. Nunc sollicitudin ornare
                  mauris, a venenatis mauris lobortis ut. Donec pretium nisl at imperdiet accumsan.
                  Morbi tempus, tortor vitae aliquam volutpat, sem enim dignissim est, ut euismod
                  risus lorem eu felis. Duis erat purus, dictum at iaculis lacinia, volutpat sed
                  eros. Pellentesque ligula elit, mattis id lacus nec, fermentum tempor libero.
                  Vivamus nec finibus velit.
                </p>
                <p className="type-body text-white mb-4">
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
                  turpis egestas. Donec semper pellentesque purus, a vehicula mi ultrices vel.
                  Vivamus quis fermentum nisl. Donec dictum scelerisque ipsum ac commodo.
                </p>
                <p className="type-body text-white mb-4">
                  Praesent condimentum congue quam nec lobortis. Ut in lacus quis massa ullamcorper
                  consequat non eu nulla. Donec imperdiet condimentum eros. Maecenas ante neque,
                  gravida sed diam sit amet, cursus sollicitudin odio. Quisque mollis magna quis
                  nulla faucibus, ac euismod ipsum volutpat.
                </p>
                <p className="type-body text-white mb-4">
                  Nulla quis turpis suscipit, mattis metus pretium, venenatis sapien. Quisque
                  pretium nec lectus ac vehicula. Class aptent taciti sociosqu ad litora torquent
                  per conubia nostra, per inceptos himenaeos. Nulla sit amet leo fringilla, accumsan
                  odio sit amet, dictum diam.
                </p>
                <p className="type-body text-white mb-4">
                  Fusce ut dui tempor odio rutrum efficitur. Suspendisse sed eleifend mauris, id
                  hendrerit sapien.
                </p>
              </div>
            </div>
          </SlowBlock>
        </div>

        <div className="flex w-screen h-screen p-8 z-10">
          <div className=" w-full h-full mx-auto bg-blue rounded-3xl">
            <Marquee
              baseVelocity={-4}
              className="pt-12"
              watchVelocity={true}
              changeDirection={true}
            >
              <span className="type-title-s text-green-light pr-6 uppercase">
                Nulla quis turpis suscipit
              </span>
            </Marquee>
            <Marquee baseVelocity={2} className="pt-2" watchVelocity={true} changeDirection={true}>
              <span className="type-title-s text-purple-light pr-6 uppercase">
                Nulla quis turpis suscipit
              </span>
            </Marquee>
            <Marquee
              baseVelocity={-12}
              className="pt-2"
              watchVelocity={true}
              changeDirection={true}
            >
              <span className="flex px-2 gap-2 items-center">
                <span className=" w-14 h-14 rounded-md bg-green m-2"></span>
                <span className=" w-14 h-14 rounded-full bg-purple m-2"></span>
                <span className=" w-14 h-14 rounded-md bg-blue-light m-2 rotate-45 scale-90"></span>
              </span>
            </Marquee>

            <Carousel />
          </div>
        </div>

        {[...Array(100)].map((_, i) => (
          <GSAPBlock
            key={i}
            className={i % 2 === 0 ? "bg-purple-light" : "bg-purple"}
            left={i % 2 === 0}
          />
        ))}
        <div className="flex items-center justify-center w-screen h-screen">
          <span className=" type-title">end</span>
        </div>
      </main>
    </Layout>
  )
}

// export const metadata: Metadata = {
//   title: "Home",
// }
