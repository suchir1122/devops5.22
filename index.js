const app = require(&#39;./app&#39;);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =&gt; {
console.log(`Server running on http://localhost:${PORT}`);
});
