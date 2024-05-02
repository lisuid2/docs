import{_ as s,c as i,o as a,a4 as e}from"./chunks/framework.D4kqST2g.js";const u=JSON.parse('{"title":"主题安装","description":"","frontmatter":{"title":"主题安装"},"headers":[],"relativePath":"install.md","filePath":"install.md"}'),t={name:"install.md"},l=e('<h1 id="主题安装" tabindex="-1">主题安装 <a class="header-anchor" href="#主题安装" aria-label="Permalink to &quot;主题安装&quot;">​</a></h1><h2 id="搭建-hexo-博客" tabindex="-1">搭建 Hexo 博客 <a class="header-anchor" href="#搭建-hexo-博客" aria-label="Permalink to &quot;搭建 Hexo 博客&quot;">​</a></h2><p>如果你还没有 Hexo 博客，请按照 <a href="https://hexo.io/zh-cn/docs/" target="_blank" rel="noreferrer">Hexo 官方文档</a> 进行安装、建站。</p><h2 id="作者的话" tabindex="-1">作者的话 <a class="header-anchor" href="#作者的话" aria-label="Permalink to &quot;作者的话&quot;">​</a></h2><p>请注意 <code>_config.solitude.yml</code> 中的配置优先级大于主题的 <code>_config.yml</code> ，所以更新主题后需要比对主题文件夹中的 <code>theme/solitude/_config.yml</code> 文件内容，一般在 <a href="https://github.com/valor-x/hexo-theme-solitude/releases" target="_blank" rel="noreferrer">release</a> 的说明里会特别提示或给出配置文件版本对比 diff，同步修改原配置文件即可。</p><p>本指南并未包含所有配置的说明，但几乎每个配置在主题配置中都有注释，你可以结合指南和注释一起参考使用。</p><p>此外，本指南仅包含主题范围内的使用说明。如果涉及到 Hexo 的使用或 Hexo 插件的使用，请参阅它们各自的文档。</p><p>若发现主题有 Bug 或者想要新增功能，请在 <a href="https://github.com/valor-x/Hexo-theme-solitude/issues" target="_blank" rel="noreferrer">issues</a> 留言，使用上的问题请在 <a href="https://github.com/orgs/valor-x/discussions" target="_blank" rel="noreferrer">Discussions</a> 中提问。</p><h2 id="主题安装-1" tabindex="-1">主题安装 <a class="header-anchor" href="#主题安装-1" aria-label="Permalink to &quot;主题安装&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">温馨提示</p><p>solitude主题拥有<strong>Main</strong>(稳定版)和<strong>Dev</strong>(测试版)两种版本, 我们推荐您安装使用<strong>Github</strong>(稳定版)以获得最佳的主题体验</p></div><p><strong>方式一(Github 推荐):</strong></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -b</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/valor-x/hexo-theme-solitude.git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> themes/solitude</span></span></code></pre></div><p><strong>开发版</strong></p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -b</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/valor-x/hexo-theme-solitude.git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> themes/solitude</span></span></code></pre></div><p><strong>升级方式</strong></p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pull</span></span></code></pre></div><p><strong>方式二(npm安装):</strong></p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hexo-theme-solitude</span></span></code></pre></div><h2 id="应用主题" tabindex="-1">应用主题 <a class="header-anchor" href="#应用主题" aria-label="Permalink to &quot;应用主题&quot;">​</a></h2><p>打开 <strong>Hexo</strong> 根目录下的 <code>config.yml</code>, 找到以下配置项，把主题改为<code>solitude</code></p><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">theme</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">solitude</span></span></code></pre></div><h2 id="安装依赖" tabindex="-1">安装依赖 <a class="header-anchor" href="#安装依赖" aria-label="Permalink to &quot;安装依赖&quot;">​</a></h2><p>主题使用了 <code>Pug </code>与 <code>Stylus</code> ，需要额外安装各自的渲染器。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hexo-renderer-pug</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hexo-renderer-stylus</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --save</span></span></code></pre></div><h2 id="语言配置" tabindex="-1">语言配置 <a class="header-anchor" href="#语言配置" aria-label="Permalink to &quot;语言配置&quot;">​</a></h2><p>修改站点配置文件<code>_config.yml</code>，不是主题配置文件 支持语言: <code>en</code> (美式英文) 、<code>zh-CN</code>(简体中文)、<code>zh-TW</code> (繁体中文)</p><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">language</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">zh-CN</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 语言</span></span></code></pre></div><h2 id="本地启动" tabindex="-1">本地启动 <a class="header-anchor" href="#本地启动" aria-label="Permalink to &quot;本地启动&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hexo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> server</span></span></code></pre></div><h2 id="优化配置" tabindex="-1">优化配置 <a class="header-anchor" href="#优化配置" aria-label="Permalink to &quot;优化配置&quot;">​</a></h2><p>在博客根目录运行以下命令，将主题的配置文件复制到根目录，以便更好的配置主题。 <strong>Mac/Linux</strong></p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cp</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -rf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./themes/solitude/_config.yml</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./_config.solitude.yml</span></span></code></pre></div><p><strong>windows</strong></p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">copy</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> themes</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">olitude</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\_</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">config.yml</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> _config.solitude.yml</span></span></code></pre></div><blockquote><p>注意</p><ul><li>根目录的 <code>_config.solitude.yml</code> 的配置都是高优先级，因此，渲染时会优先采用此文件的配置项内容</li><li>在更新主题时可能会存在配置变更，请注意更新说明，可能需要手动对 <code>_config.solitude.yml</code> 同步修改</li><li>想查看覆盖配置有没有生效，可以通过 <code>hexo g --debug</code> 查看命令行输出</li></ul></blockquote><h2 id="版本号释义" tabindex="-1">版本号释义 <a class="header-anchor" href="#版本号释义" aria-label="Permalink to &quot;版本号释义&quot;">​</a></h2><p>本项目的版本号为 X.Y.Z 格式，但与常见的 <a href="https://semver.org/lang/zh-CN/" target="_blank" rel="noreferrer">语义化版本号规范</a> 有部分区别，具体释义如下：</p><ul><li><p>X: 产品层面的重新设计，包含重大框架重构，会涉及大范围功能变更与配置变更，更新前必须阅读相关文档</p></li><li><p>Y: 包含中大型新功能，及无法向下兼容的功能变更与配置变更，更新该版本号可能会需要修改配置或者移除一些原功能</p></li><li><p>Z: 不仅包含 BUG 修复、小型新功能，还会包含可以向下兼容的原功能更新与配置变更，原则上更新该版本号无需额外动作</p></li></ul>',38),h=[l];function n(o,p,d,r,c,k){return a(),i("div",null,h)}const F=s(t,[["render",n]]);export{u as __pageData,F as default};
