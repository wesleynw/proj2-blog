function Article({ title, image, description, author, date, backgroundColor }) {
  console.log("Article");
  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        textAlign: "center",
        color: "white",
      }}
    >
      <div style={{ paddingBottom: 25, paddingTop: 25 }}>
        <h1 style={{ margin: 0, padding: 0, fontSize: 75 }}>{title}</h1>
        <span style={{ fontSize: 25 }}>
          by {author} on {date}
        </span>
      </div>

      <img src={image} alt={title} style={{ width: "100%" }} />
      <div style={{ textAlign: "left", margin: 25 }}>
        <h2 style={{ fontSize: 40, padding: 0, margin: 0 }}>Description</h2>
        <p style={{ padding: 10, fontSize: 20 }}>{description}</p>
      </div>
    </div>
  );
}

// return Article({
//   title: "Secretarybird",
//   image: secImg,
//   description: secretarybirdText,
//   author: "John Doe",
//   date: "2021-01-01",
//   backgroundColor: "#697827",
// });

//
export default Article;
