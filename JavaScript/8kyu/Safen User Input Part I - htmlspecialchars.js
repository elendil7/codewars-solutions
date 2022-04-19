function htmlspecialchars(formData) {
  return [...formData].map(v=>v==`<`?`&lt;`:v==`>`?`&gt;`:v==`"`?`&quot;`:v==`&`?`&amp;`:v).join``
}
