<template>
    <div class="container">
        <!-- ヘッダー -->
        <header>
            <nav class="navbar is-fixed-top header-nav" role="navigation" aria-label="main navigation">
                <div class="navbar-brand container">
                    <div class="navbar-start is-flex-touch">
                        <nuxt-link
                            class="navbar-item is-size-6 has-text-weight-bold header-nav-link"
                            v-scroll-to="'#anchor1'"
                            to
                        >
                            Profile
                        </nuxt-link>
                        <nuxt-link
                            class="navbar-item is-size-6 has-text-weight-bold header-nav-link"
                            v-scroll-to="'#anchor2'"
                            to
                        >
                            Products
                        </nuxt-link>
                        <a
                            v-for="menu in menus"
                            :key="menu.id"
                            :href="menu.link"
                            class="navbar-item is-size-6 has-text-weight-bold header-nav-link"
                            target="_blank"
                        >
                            {{ menu.name }}
                        </a>
                    </div>
                </div>
            </nav>
        </header>

        <!-- コンテンツ -->
        <div class="main-content pt-6 mb-6">
            <!-- プロフィール -->
            <section class="container main-content-section mb-6" id="anchor1">
                <h1 class="has-text-weight-bold has-text-centered is-size-5 mb-2">
                    Proflie
                </h1>
                <div class="image is-96x96 mt-0 mb-4 mr-auto ml-auto">
                    <img src="/my-portfolio-v2/images/icon_profile.png" class="is-rounded" alt="profile">
                </div>
                <p
                    v-html="profile.text"
                    class="has-text-centered mb-4"
                >
                </p>
                <div class="is-flex is-justify-content-center">
                    <a
                        v-for="menu in menus"
                        :key="menu.id"
                        :href="menu.link"
                        target="_blank"
                        class="mr-2 ml-2 image is-32x32"
                    >
                        <img
                            :src="image_src + menu.icon"
                            :alt="menu.name"
                        >
                    </a>
                </div>
            </section>
            <!-- 制作物一覧 -->
            <section id="anchor2">
                <h1 class="has-text-weight-bold has-text-centered is-size-5 mb-4">
                    Products
                </h1>
                <div class="is-flex-desktop is-flex-wrap-wrap is-justify-content-space-between">
                    <div
                        v-for="content in contents"
                        :key="content.id"
                        class="link-hover main-content-box card mb-5"
                    >
                        <article class="card-content">
                            <p class="title is-4 main-content-box-title">
                                {{ content.title }}
                            </p>
                            <div class="content">
                                <p class="main-content-box-body">{{ content.description }}</p>
                                <a
                                    :href="content.link"
                                    target="_blank"
                                    class="mr-4"
                                >Link</a>
                                <a
                                    :href="content.github"
                                    target="_blank"
                                    class=""
                                >Github</a>
                            </div>
                            <figure class="image">
                                <img
                                    :src="image_src + content.thumb"
                                >
                            </figure>
                        </article>
                    </div>
                </div>
            </section>
        </div>

        <!-- フッター -->
        <footer class="pt-4 pb-6">
            <div class="content has-text-centered">
                <p class="is-size-7 has-text-weight-bold">World Wide Well</p>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            image_src: '/my-portfolio-v2/images/',
            profile: {
                name: 'Kosuke',
                text: 'Hello. My name is Kosuke.<br>I am a Web Engineer.',
                birthday: '1992-08-22',
            },
            menus: [
                {
                    id: 1,
                    name: 'Github',
                    link: 'https://github.com/kskwes',
                    icon: 'icon_github.png',
                },
            ],
            contents: [
                {
                    id: 1,
                    title: '三択クイズ',
                    description: 'Vue.jsで制作した三択式のクイズアプリケーション',
                    link: 'https://kskwes.github.io/vuecli-quiz/',
                    github: 'https://github.com/kskwes/vuecli-quiz', 
                    thumb: 'thumb_quiz.png',
                },
                {
                    id: 2,
                    title: 'コーポレートサイト',
                    description: 'Laravelで制作したコーポレートサイト',
                    link: 'http://corporate-site-2021.herokuapp.com/corporate',
                    github: 'https://github.com/kskwes/corporate-site', 
                    thumb: 'thumb_corporate_laravel.png',
                },
                {
                    id: 3,
                    title: 'コーポレートサイト',
                    description: 'HTMLとCSSで制作したコーポレートサイト',
                    link: 'https://kskwes.github.io/corporate-site_html/',
                    github: 'https://github.com/kskwes/corporate-site_html', 
                    thumb: 'thumb_corporate_html.png',
                },
                {
                    id: 4,
                    title: '時効掲示板',
                    description: 'PHPで制作。公開日時を設定し、設定した日時を過ぎると初めて公開される掲示板。',
                    link: 'http://outputground.php.xdomain.jp/jiko/',
                    github: 'https://github.com/kskwes/jiko', 
                    thumb: 'thumb_jiko.png',
                },
                {
                    id: 5,
                    title: '日報サービス',
                    description: 'PHPで制作。社内で使用することを想定した日報サービス。',
                    link: 'http://outputground.php.xdomain.jp/daily-report/work/public/',
                    github: 'https://github.com/kskwes/daily-report', 
                    thumb: 'thumb_dr.png',
                },
                {
                    id: 6,
                    title: 'コーポレートサイト',
                    description: 'WordPressで制作したコーポレートサイト',
                    link: 'http://outputground.wp.xdomain.jp/',
                    github: 'https://github.com/kskwes/wp', 
                    thumb: 'thumb_wp.png',
                },
                {
                    id: 7,
                    title: 'BINGO GAME',
                    description: 'JavaScriptで制作。ビンゴゲームのアプリケーション。',
                    link: 'https://kskwes.github.io/my-portfolio/home/portfolio/bingogame/',
                    github: 'https://github.com/kskwes/my-portfolio/tree/main/home/portfolio/bingogame', 
                    thumb: 'thumb_bingo.png',
                },
            ],
        }
    }
}
</script>