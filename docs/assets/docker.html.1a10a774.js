import{r as s,o as r,c as i,a,d as t,F as c,b as e,e as o}from"./app.88d1a4f1.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const d={},u=a("h1",{id:"default-docker-integration",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#default-docker-integration","aria-hidden":"true"},"#"),e(" Default Docker Integration")],-1),h=a("p",null,[a("code",null,"vcn"),e(" supports local docker installations out of the box using "),a("code",null,"docker://"),e(" as a location. You just need to point to the correct container image name or the container image id.")],-1),p=e("If you prefer "),g={href:"https://podman.io/",target:"_blank",rel:"noopener noreferrer"},m=e("podman"),v=e(", just use "),_=a("code",null,"podman://",-1),b=e(" instead."),f=o(`<h3 id="notarize-a-local-docker-image" tabindex="-1"><a class="header-anchor" href="#notarize-a-local-docker-image" aria-hidden="true">#</a> Notarize a local docker image</h3><p><code>vcn</code> uses docker default schemes, so the latest tag is automatically used, if no tag is given</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vcn notarize docker://hello-world
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>or using a tag</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vcn notarize docker://hello-world:v1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,5),k=e("To be able to notarize, you need to register at "),x={href:"https://dashboard.codenotary.io",target:"_blank",rel:"noopener noreferrer"},y=e("Codenotary"),w=e(" and get an account."),q=o(`<h3 id="authenticate-a-local-docker-image" tabindex="-1"><a class="header-anchor" href="#authenticate-a-local-docker-image" aria-hidden="true">#</a> Authenticate a local docker image</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vcn authenticate docker://hello-world
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>or using a tag</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vcn authenticate docker://hello-world:v1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h1 id="docker-sidecar-integration" tabindex="-1"><a class="header-anchor" href="#docker-sidecar-integration" aria-hidden="true">#</a> Docker Sidecar Integration</h1><p><code>vcn</code> also offers a sidecar project, you can use to automatically authenticate used container images during runtime.</p><p>Check out (https://github.com/vchain-us/vcn-watchdog) on your server. The tool continuously verifies the integrity of your containers:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git clone https://github.com/vchain-us/vcn-watchdog.git 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Edit the verify file and set the alerting/monitoring tool you are using (see the following instructions), if you want to change the alerting</p>`,9),S=e("Make sure "),C=a("code",null,"/var/run/docker.sock",-1),E=e(" is accessible and run the following command on your server within the "),z={href:"https://github.com/vchain-us/vcn-watchdog.git",target:"_blank",rel:"noopener noreferrer"},I=e("vcn-watchdog"),N=e(" directory."),T=o(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker-compose build &amp;&amp; docker-compose up 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>To modify the verify file, hook up your alerting tool into the err() function.</p><p>Example using Slack, do the following:</p><ul><li>Create a Slack Bot (Slack documentation here)</li><li>Use the following code:</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function err() {
    echo &quot;Container \${1} (\${2}) verification failed&quot; &gt;&amp;2
    curl -q -X POST \\
        -H &#39;Content-type: application/json&#39; \\
        --data &quot;{\\&quot;text\\&quot;:\\&quot;Container \${1} (\${2}) verification failed\\&quot;}&quot; \\
        &quot;https://hooks.slack.com/services/$TOKEN/$KEY&quot; &gt; /dev/null 2&gt;&amp;1} 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>If all works well, you should receive slack messages in your slack channel</p><p><img src="https://www.vchain.us/wp-content/uploads/2019/04/002_Alerting-on-Slack-example-768x129.png" alt="Slack alert based on vcn verify" title="Slack alert based on vcn verify"></p>`,7);function $(j,B){const n=s("ExternalLinkIcon");return r(),i(c,null,[u,h,a("p",null,[p,a("a",g,[m,t(n)]),v,_,b]),f,a("p",null,[k,a("a",x,[y,t(n)]),w]),q,a("p",null,[S,C,E,a("a",z,[I,t(n)]),N]),T],64)}var A=l(d,[["render",$]]);export{A as default};
