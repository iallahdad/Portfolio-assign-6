const blogData =[{
  id:1,
  slug:"MY-FOOTER",
  des:"footer"
},
{
  id:2,
  slug:"MY-HEADER",
  des:"header"
}]
export default function sblog({params}:{params: {slug:string}}) {
  const selectBlog = blogData.filter((item)=> item.slug === params.slug)
    return (
      <div className='w-196 order-3 flex justify-center'>
  {selectBlog[0]?.des}
  </div>
    )
  }