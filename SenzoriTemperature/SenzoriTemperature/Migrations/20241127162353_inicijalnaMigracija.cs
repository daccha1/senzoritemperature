using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SenzoriTemperature.Migrations
{
    /// <inheritdoc />
    public partial class inicijalnaMigracija : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Senzori",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    lokacija = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    vremeMerenja = table.Column<DateTime>(type: "datetime2", nullable: false),
                    temperatura = table.Column<double>(type: "float", nullable: false),
                    poslovniPartner = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    datumServisa = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Senzori", x => x.id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Senzori");
        }
    }
}
