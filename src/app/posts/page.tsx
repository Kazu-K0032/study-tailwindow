const PostListPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="fixed inset-x-0 top-0 z-10 bg-white px-2 py-3 shadow-sm sm:px-0">
        <div className="container mx-auto flex flex-col justify-between gap-2 sm:flex-row">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex size-10 items-center justify-center rounded-full bg-purple-400 text-white shadow-xl hover:cursor-pointer hover:bg-purple-600">
                B
              </div>
              <span className="text-xl font-semibold text-gray-800">
                BlogSpace
              </span>
            </div>
            <div className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-gray-200 text-white hover:cursor-pointer hover:bg-gray-300 sm:hidden">
              &#128100;
            </div>
          </div>
          <div className="flex gap-4">
            <div className="relative w-full sm:w-64">
              <input className="w-full rounded-sm bg-gray-100 px-4 py-2 focus:outline-2 focus:outline-purple-400" />
              <span className="absolute top-2 right-3">&#128269;</span>
            </div>
            <button className="hidden cursor-pointer rounded-sm bg-purple-400 px-4 py-2 text-white transition-colors duration-1000 hover:bg-purple-600 sm:block">
              新規登録
            </button>
            <div className="hidden size-10 cursor-pointer items-center justify-center rounded-full bg-gray-200 text-white hover:cursor-pointer hover:bg-gray-300 sm:flex">
              &#128100;
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto flex items-start gap-12 px-2 pt-32 pb-12 sm:px-0 sm:pt-24">
        <nav className="sticky top-24 hidden w-64 shrink-0 space-y-4 rounded-xl bg-white p-4 shadow-xl sm:block">
          <button className="w-full rounded-lg px-4 py-2 text-left text-gray-700 hover:bg-gray-50">
            &#127968;: ホーム
          </button>
          <button className="w-full rounded-lg px-4 py-2 text-left text-gray-700 hover:bg-gray-50">
            &#128200;: トレンド
          </button>
          <button className="w-full rounded-lg px-4 py-2 text-left text-gray-700 hover:bg-gray-50">
            &#128214;: 投稿一覧
          </button>
          <button className="w-full rounded-lg px-4 py-2 text-left text-gray-700 hover:bg-gray-50">
            &#128100;: ユーザー一覧
          </button>
        </nav>
        <div className="grid grow grid-cols-1 gap-6 sm:grid-cols-2">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl bg-white shadow-md transition-all duration-500 hover:scale-102 hover:shadow-xl"
            >
              <div className="relative aspect-video">
                <div className="absolute inset-0 bg-linear-to-br from-purple-200 to-purple-500"></div>
                <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">
                  記事タイトル
                </h3>
              </div>
              <div className="p-4">
                <p className="line-clamp-2 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  sequi minima, soluta quam a, facere rem aliquam quisquam
                  aperiam vitae rerum praesentium, ea consectetur. Beatae
                  voluptatum commodi neque cum. Aperiam.
                </p>
                <div className="mt-4 flex justify-between text-sm">
                  <div className="flex gap-3 text-gray-500">
                    <span>&#128077;: 123</span>
                    <span>&#128173;: 45</span>
                  </div>
                  <span className="text-gray-400">2025/01/01</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default PostListPage;
