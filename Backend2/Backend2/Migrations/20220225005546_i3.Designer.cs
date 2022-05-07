﻿// <auto-generated />
using Backend2;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Backend2.Migrations
{
    [DbContext(typeof(AplicationDbContext))]
    [Migration("20220225005546_i3")]
    partial class i3
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.22")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("BackEnd2.Models.TarjetaCredito", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("CVV")
                        .IsRequired()
                        .HasColumnType("varchar(3)");

                    b.Property<string>("FechaExpiracion")
                        .IsRequired()
                        .HasColumnType("varchar(5)");

                    b.Property<string>("NumeroTarjeta")
                        .IsRequired()
                        .HasColumnType("varchar(16)");

                    b.Property<string>("Titular")
                        .IsRequired()
                        .HasColumnType("varchar(100)");

                    b.HasKey("Id");

                    b.ToTable("TarjetaCredito");
                });
#pragma warning restore 612, 618
        }
    }
}
