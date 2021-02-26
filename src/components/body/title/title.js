const Title = ({ data }) => (
    <>
        <h1>{data.title}</h1>{data.autor ? (<small> by {data.autor}</small>) : ""}
    </>
);
export default Title;