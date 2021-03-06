package com.lambdaschool.oktafoundation.services;

import com.lambdaschool.oktafoundation.models.Club;

import java.util.List;

public interface ClubService
{
    List<Club> findAll();

    Club save(Club club);

    public void deleteAll();
}
