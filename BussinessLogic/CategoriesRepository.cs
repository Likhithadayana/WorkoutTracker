using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BussinessLogic
{

    public class CategoriesRepository
    {
        public List<workoutcategory> GetAll()
        {
            try
            {
                using (CasestudylikiEntities objcontext = new CasestudylikiEntities())
                {
                    var query = from obj in objcontext.workoutcategories
                                select obj;

                    return query.ToList();
                }

            }catch(Exception ex)
            {
                throw ex;
            }
        }
/*
       

        public void EditCatagory(int catagoryid)
        {
            try
            {

            }
            catch(Exception ex)
            {
                throw ex;
            }

        }



        public void AddCatagory(workoutcategory obj)
        {
            try
            {

            }
            catch (Exception ex)
            {
                throw ex;
            }

        }


        public void DeleteCatagory(int catagoryid)
        {
            try
            {

            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

    */


    }
}
