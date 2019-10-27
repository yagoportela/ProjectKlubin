using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Data.Migrations
{
    public partial class InitialUSers : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "User",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    CreateAt = table.Column<DateTime>(nullable: true),
                    UpdateAt = table.Column<DateTime>(nullable: true),
                    idIdentity = table.Column<string>(nullable: true),
                    ImgPerfil = table.Column<string>(nullable: true),
                    Tipo = table.Column<int>(nullable: false),
                    nome = table.Column<string>(nullable: true),
                    cpf = table.Column<string>(nullable: true),
                    moedas = table.Column<string>(nullable: true),
                    codigoDeBarras = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_User_idIdentity",
                table: "User",
                column: "idIdentity",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "User");
        }
    }
}
