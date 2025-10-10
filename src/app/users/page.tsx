import Image from 'next/image';

const UserListPage = () => {
  return (
    <div>
      <div className="fixed top-0 left-0 hidden h-screen text-white sm:flex">
        <div className="flex h-full w-16 flex-col items-center gap-4 bg-gray-800 pt-5">
          <div className="flex size-10 items-center justify-center rounded-full border-2 border-solid border-purple-400 bg-linear-to-l from-purple-400 to-gray-400 shadow-lg hover:from-purple-600 hover:to-gray-600 hover:shadow-xl">
            1
          </div>
          <div className="flex size-10 items-center justify-center rounded-full border-2 border-solid border-blue-400 bg-linear-to-l from-blue-400 to-gray-400 shadow-lg hover:from-blue-600 hover:to-gray-600 hover:shadow-xl">
            2
          </div>
          <div className="flex size-10 items-center justify-center rounded-full border-2 border-solid border-emerald-400 bg-linear-to-l from-emerald-400 to-gray-400 shadow-lg hover:from-emerald-600 hover:to-gray-600 hover:shadow-xl">
            3
          </div>
        </div>
        <div className="flex w-64 flex-col justify-between bg-gray-700 px-4 pb-5">
          <div>
            <Image
              src="https://static.kirara-code.net/images/logo_31859b1c-253e-46fc-b954-8ac41aeae82e.png"
              alt="logo"
              width={120}
              height={40}
              style={{ width: 'auto', height: 'auto' }}
            />
            <div className="mt-10 flex flex-col gap-8">
              <button className="group flex gap-4 text-2xl transition-colors duration-500 hover:text-gray-300">
                <span className="transition-transform duration-500 group-hover:rotate-360">
                  &#127968;
                </span>
                <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-400 after:transition-all after:duration-500 group-hover:after:w-full">
                  ホーム
                </span>
              </button>
              <button className="group flex gap-4 text-2xl transition-colors duration-500 hover:text-gray-300">
                <span className="transition-transform duration-500 group-hover:rotate-360">
                  &#128200;
                </span>
                <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-400 after:transition-all after:duration-500 group-hover:after:w-full">
                  トレンド
                </span>
              </button>
              <button className="group flex gap-4 text-2xl transition-colors duration-500 hover:text-gray-300">
                <span className="transition-transform duration-500 group-hover:rotate-360">
                  &#128214;
                </span>
                <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-400 after:transition-all after:duration-500 group-hover:after:w-full">
                  投稿一覧
                </span>
              </button>
              <button className="group flex gap-4 text-2xl transition-colors duration-500 hover:text-gray-300">
                <span className="transition-transform duration-500 group-hover:rotate-360">
                  &#128100;
                </span>
                <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-400 after:transition-all after:duration-500 group-hover:after:w-full">
                  ユーザー一覧
                </span>
              </button>
            </div>
          </div>
          <button className="group flex gap-4 text-2xl transition-colors duration-500 hover:text-gray-300">
            <span className="transition-transform duration-500 group-hover:rotate-360">
              &#9881;&#65039;
            </span>
            <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-400 after:transition-all after:duration-500 group-hover:after:w-full">
              設定
            </span>
          </button>
        </div>
      </div>
      <div>
        <header className="fixed top-8 right-0 left-80 hidden h-10 items-center bg-white shadow-md sm:flex">
          <h1 className="pl-5 text-lg text-gray-500">
            ユーザー一覧
          </h1>
        </header>
        <header className="fixed inset-x-0 top-0 flex h-15 items-center justify-between bg-gray-700 pr-4 sm:hidden">
          <Image
            src="https://static.kirara-code.net/images/logo_31859b1c-253e-46fc-b954-8ac41aeae82e.png"
            alt="logo"
            width={100}
            height={40}
            className="h-10 w-25"
            style={{ width: 'auto', height: 'auto' }}
          />
          <button className="relative h-6 w-8">
            <span className="absolute top-1/2 left-0 h-0.5 w-full -translate-y-2 rounded-full bg-white"></span>
            <span className="absolute top-1/2 left-0 h-0.5 w-full rounded-full bg-white"></span>
            <span className="absolute top-1/2 left-0 h-0.5 w-full translate-y-2 rounded-full bg-white"></span>
          </button>
        </header>
        <main className="mt-14 ml-0 flex flex-col p-4 sm:mt-10 sm:ml-80">
          {[...Array(10)].map((_, index) => (
            <div
              key={index}
              className="hover:taransition-all flex cursor-pointer items-center gap-3 rounded-lg border border-solid border-gray-100 bg-white p-2 shadow-md duration-500 hover:scale-105 hover:shadow-lg sm:gap-4 sm:p-6"
            >
              <div className="flex size-8 items-center justify-center rounded-full bg-linear-to-br from-purple-400 to-gray-400 text-white sm:size-10 md:size-12">
                1
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-gray-800 sm:text-base md:text-lg">
                  ユーザー１
                </h3>
                <p className="line-clamp-2 text-xs text-gray-600 sm:text-sm">
                  Lorem, ipsum dolor sit amet
                  consectetur adipisicing elit.
                  Voluptates rerum sint vel
                  distinctio quod ducimus eveniet
                  iure cumque ad velit? Neque
                  doloremque at similique
                  architecto aliquam, illo vero ad
                  amet tempora unde itaque eius
                  obcaecati error sit recusandae
                  dolores eos natus libero
                  corrupti. Quisquam aut similique
                  velit minus accusantium quas
                  iste ratione beatae voluptatum
                  ipsam? Ut beatae odit voluptatem
                  id, cum maiores nostrum
                  consectetur, earum impedit
                  itaque, eum nulla necessitatibus
                  dolor unde deserunt ab et!
                  Aliquam quam nulla magnam,
                  provident vel, enim
                  necessitatibus facilis mollitia
                  doloribus impedit quaerat
                  delectus optio possimus earum
                  ullam eligendi molestiae eum
                  cupiditate quae dolorem ducimus
                  nihil. Eveniet expedita itaque,
                  voluptates est modi minus magni
                  doloremque atque harum culpa at
                  doloribus ratione eos tempora,
                  tempore sequi. Facilis,
                  aspernatur consequatur? Officia
                  aliquam illo nam dolorem sunt,
                  quidem nihil est ab culpa
                  corporis alias dolores accusamus
                  praesentium provident et
                  assumenda maxime vitae minima
                  laudantium a maiores? Quis,
                  doloremque ut vero qui labore
                  facilis, sunt molestiae iste
                  fuga obcaecati necessitatibus
                  sequi repudiandae vel modi? Id
                  harum vel ut earum aliquam iste
                  odio, autem facere consequuntur
                  reprehenderit modi error
                  architecto unde ullam, ducimus
                  dolor quia exercitationem
                  pariatur rerum libero? Non
                  possimus sapiente dolore
                  doloremque? Fuga voluptatibus ea
                  laboriosam nostrum, molestias
                  modi aperiam architecto et esse,
                  perspiciatis corrupti
                  consequuntur, repellat
                  blanditiis. Enim culpa quisquam
                  facere itaque placeat impedit
                  quod soluta voluptatibus
                  facilis, perspiciatis provident
                  assumenda illo nulla non
                  dignissimos eos rerum harum
                  blanditiis repellat voluptatum,
                  dolorem at, eligendi adipisci.
                  In iusto cupiditate facilis
                  maxime quasi quae ab animi
                  assumenda magnam aliquam aut
                  vitae ea unde, cumque aspernatur
                  rerum similique labore quo. Nam
                  nisi impedit ratione nostrum
                  provident corporis tempora quae
                  tempore dicta necessitatibus
                  sapiente optio totam officia
                  nihil ipsam cumque repellendus
                  cupiditate voluptates, nemo rem
                  praesentium eaque excepturi
                  culpa asperiores! Inventore
                  vitae ex voluptas impedit
                  architecto quaerat ratione.
                  Deserunt, tempora rerum ex
                  veniam id debitis quam eius
                  perspiciatis explicabo aliquid
                  hic inventore similique quasi,
                  quo facilis libero molestiae
                  quas ipsa. Inventore cumque
                  assumenda ea! Velit, beatae
                  quos, dolorum sit amet nihil
                  iure eveniet quibusdam soluta
                  minus maxime accusamus vel
                  sapiente deserunt rerum vero
                  illo voluptas aliquid. Rem
                  minima quam aliquam, libero
                  pariatur vitae odit architecto
                  ullam expedita commodi. Illum
                  tempore est autem in. Unde
                  veritatis temporibus sint,
                  architecto vero quisquam nihil
                  est obcaecati id accusantium
                  dolorum, fuga magni laboriosam
                  quo. Recusandae, dolore? Ipsum
                  quam exercitationem fuga
                  officiis quae atque aliquam
                  aliquid corporis itaque vel nisi
                  debitis placeat amet maxime
                  fugit, voluptatibus, laborum
                  eaque ut animi tempore eveniet
                  non unde. Itaque atque libero
                  praesentium odio, eum dicta
                  incidunt dolore laborum quia
                  veniam vel deserunt nobis eos
                  expedita quis ipsam? Cupiditate
                  dicta porro repudiandae vel quas
                  dolorum nulla architecto
                  deleniti! Saepe voluptatum
                  corporis ipsam nam, dolorum,
                  deserunt consectetur laborum
                  laboriosam sint blanditiis
                  suscipit quaerat architecto,
                  praesentium quae dicta hic
                  necessitatibus! Voluptas ea
                  ullam, dignissimos reprehenderit
                  enim recusandae quo perferendis
                  ipsa optio aliquam nostrum.
                  Deserunt, nulla quo ea
                  voluptatum libero possimus. Ab
                  facere facilis recusandae nam
                  magnam pariatur, minus et
                  excepturi omnis saepe minima
                  iusto ipsum quis, perspiciatis
                  explicabo cumque quas? Dicta,
                  optio. Praesentium!
                </p>
                <div className="mt-2 flex flex-wrap gap-2 text-xs text-gray-500 sm:mt-4 sm:gap-4 sm:text-sm">
                  <span className="flex gap-1">
                    <span>&#128077;</span>
                    <span>123</span>
                  </span>
                  <span className="flex gap-1">
                    <span>&#127880;</span>
                    <span>45</span>
                  </span>
                  <span className="flex gap-1">
                    <span>&#128173;</span>
                    <span className="hidden sm:inline">2024/03/21</span>
                    <span className="sm:hidden">03/21</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default UserListPage;
