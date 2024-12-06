﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using SenzoriTemperature.Data;

#nullable disable

namespace SenzoriTemperature.Migrations
{
    [DbContext(typeof(SenzorContext))]
    partial class SenzorContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "9.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("SenzoriTemperature.Models.Senzor", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("id"));

                    b.Property<DateTime>("datumServisa")
                        .HasColumnType("datetime2");

                    b.Property<string>("lokacija")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("poslovniPartner")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("temperatura")
                        .HasColumnType("float");

                    b.Property<DateTime>("vremeMerenja")
                        .HasColumnType("datetime2");

                    b.HasKey("id");

                    b.ToTable("Senzori");
                });
#pragma warning restore 612, 618
        }
    }
}
