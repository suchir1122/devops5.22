const express = require(&#39;express&#39;);
const app = express();
app.get(&#39;/&#39;, (req, res) =&gt; res.send(&#39;{ &quot;response&quot;: &quot;Hello From DSCE&quot; }&#39;));
app.get(&#39;/will&#39;, (req, res) =&gt; res.send(&#39;{ &quot;response&quot;: &quot;Hello World&quot; }&#39;));
app.get(&#39;/ready&#39;, (req, res) =&gt; res.send(&#39;{ &quot;response&quot;: &quot;Great!, It works!&quot; }&#39;));
module.exports = app;
