using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApiBackboneJs.Models
{
    public class Planet
    {
        /// <summary>
        /// Gets or sets the identifier.
        /// </summary>
        /// <value>
        /// The identifier.
        /// </value>
        public int Id { get; set; }

        /// <summary>
        /// Gets or sets the name.
        /// </summary>
        /// <value>
        /// The name.
        /// </value>
        public string Name { get; set; }

        /// <summary>
        /// Gets or sets the diameter (km).
        /// </summary>
        /// <value>
        /// The diameter (km).
        /// </value>
        public int Diameter { get; set; }

        /// <summary>
        /// Gets or sets the orbit (Earth days).
        /// </summary>
        /// <value>
        /// The orbit (Earth days).
        /// </value>
        public decimal Orbit { get; set; }

        /// <summary>
        /// Gets or sets the day (Earth days).
        /// </summary>
        /// <value>
        /// The day (Earth days).
        /// </value>
        public decimal Day { get; set; }
    }
}