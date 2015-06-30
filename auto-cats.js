var cats={'javascript':'javascript|js'};
function get_cat()
{
  for(var k in cats)
    {
      if(cats.hasOwnProperty(k))
        {
          if(new RegExp(cats[k], 'i').exec(document.title.split(' - ')[0]))
            {
              return k;
              break;
            }
        }
    }
}
