using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using NUnit.Framework;
using BussinessLogic;
namespace UnitTest
{
    [TestFixture]
    public class CategoriesRespositoryTest
    {
       

        [Test]
        public void GetAllTest()
        {
            CategoriesRepository obj = new CategoriesRepository();
           var actual = obj.GetAll().Count();
            int expected = 2;
                Assert.AreEqual(expected, actual);


        }
/*
        [Test]
        public void GetByIdTest()
        {
          
            double actual =
            double expected =
                Assert.AreEqual(expected, actual);


        }

        [Test]
        public void EditCatagoryTest()
        {
            CategoriesRepository obj = new CategoriesRepository();
            double actual =
            double expected =
                Assert.AreEqual(expected, actual);


        }

        [Test]
        public void AddCatagoryTest()
        {
            CategoriesRepository obj = new CategoriesRepository();
            double actual =
            double expected =
                Assert.AreEqual(expected, actual);


        }
        */
    }
}
