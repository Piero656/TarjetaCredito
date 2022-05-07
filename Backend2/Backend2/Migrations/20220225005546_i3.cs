using Microsoft.EntityFrameworkCore.Migrations;

namespace Backend2.Migrations
{
    public partial class i3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Tittular",
                table: "TarjetaCredito",
                newName: "Titular");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Titular",
                table: "TarjetaCredito",
                newName: "Tittular");
        }
    }
}
